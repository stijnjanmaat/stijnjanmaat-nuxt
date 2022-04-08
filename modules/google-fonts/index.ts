/**
 * Nuxt3 compatible google-fonts-module
 * Copied from https://github.com/nuxt-community/google-fonts-module/issues/67#issuecomment-1053526490
 */

import { resolve } from 'path';
import { GoogleFontsHelper } from 'google-fonts-helper';
import { defineNuxtModule } from '@nuxt/kit';
import { CONFIG_KEY, ModuleOptions } from '../../@types/config.shim.d';

export default defineNuxtModule({
  meta: {
    name: '@nuxtjs/google-fonts',
    configKey: CONFIG_KEY,
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  async setup(moduleOptions, nuxt) {
    const DEFAULTS: ModuleOptions = {
      families: {},
      display: null,
      subsets: [],
      text: null,
      prefetch: true,
      preconnect: true,
      preload: true,
      useStylesheet: false,
      download: false,
      base64: false,
      inject: true,
      overwriting: false,
      outputDir: nuxt.options.dir.assets,
      stylePath: 'css/fonts.css',
      fontsDir: 'fonts',
      fontsPath: '@/assets/fonts',
    };

    const options: ModuleOptions = {
      ...DEFAULTS,
      ...moduleOptions,
      ...nuxt.options['google-fonts'],
      ...nuxt.options[CONFIG_KEY],
    };

    const googleFontsHelper = new GoogleFontsHelper({
      families: options.families,
      display: options.display,
      subsets: options.subsets,
      text: options.text,
    });

    // merge fonts from valid head link
    const fontsParsed = (nuxt.options.head.link || [])
      .filter(link => GoogleFontsHelper.isValidURL(link.href))
      .map(link => GoogleFontsHelper.parse(link.href));

    if (fontsParsed.length) {
      googleFontsHelper.merge(...fontsParsed);
    }

    // construct google fonts url
    const url = googleFontsHelper.constructURL();

    if (!url) {
      console.warn('No provided fonts.');

      return;
    }

    // remove fonts
    nuxt.options.head.link = (nuxt.options.head.link || [])
      .filter(link => !GoogleFontsHelper.isValidURL(link.href));

    // download
    if (options.download) {
      const outputDir = nuxt.options.alias[options.outputDir] || options.outputDir;

      try {
        await GoogleFontsHelper.download(url, {
          base64: options.base64,
          overwriting: options.overwriting,
          outputDir,
          stylePath: options.stylePath,
          fontsDir: options.fontsDir,
          fontsPath: options.fontsPath,
        });

        if (options.inject) {
          nuxt.options.css.push(resolve(outputDir, options.stylePath));
        }

      } catch (e) { /* istanbul ignore next */
        console.error(e);
      }

      return;
    }

    // https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch
    if (options.prefetch) {
      nuxt.options.head.link.push({
        hid: 'gf-prefetch',
        rel: 'dns-prefetch',
        href: 'https://fonts.gstatic.com/',
      });
    }

    // https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch#Best_practices
    // connect to domain of font files
    if (options.preconnect) {
      nuxt.options.head.link.push({
        hid: 'gf-preconnect',
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: '',
      });
    }

    // https://developer.mozilla.org/pt-BR/docs/Web/HTML/Preloading_content
    // optionally increase loading priority
    if (options.preload) {
      nuxt.options.head.link.push({
        hid: 'gf-preload',
        rel: 'preload',
        as: 'style',
        href: url,
      });
    }

    // append CSS
    if (options.useStylesheet) {
      nuxt.options.head.link.push({
        hid: 'gf-style',
        rel: 'stylesheet',
        href: url,
      });

      return;
    }

    // JS to inject CSS
    nuxt.options.head.script = nuxt.options.head.script || [];
    nuxt.options.head.script.push({
      hid: 'gf-script',
      innerHTML: `(function(){var l=document.createElement('link');l.rel="stylesheet";l.href="${url}";document.querySelector("head").appendChild(l);})();`,
    });

    // no-JS fallback
    nuxt.options.head.noscript = nuxt.options.head.noscript || [];
    nuxt.options.head.noscript.push({
      hid: 'gf-noscript',
      innerHTML: `<link rel="stylesheet" href="${url}">`,
    });

    // Disable sanitazions
    nuxt.options.head.__dangerouslyDisableSanitizersByTagID = nuxt.options.head.__dangerouslyDisableSanitizersByTagID || {};
    nuxt.options.head.__dangerouslyDisableSanitizersByTagID['gf-script'] = ['innerHTML'];
    nuxt.options.head.__dangerouslyDisableSanitizersByTagID['gf-noscript'] = ['innerHTML'];
  },
});
