export default {
  scrollBehavior(to, from, _savedPosition) {
    // if hash is set, scroll behavior works properly
    if (to.hash !== '')
      return;

    return { top: 0 };
  },
};
