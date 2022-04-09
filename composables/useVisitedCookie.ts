const COOKIE_NAME = 'sj_visited';

let nuxt;

function _makeGetterSetter (sjVisitedCookie) {
  return {
    get meVisited() {
      return sjVisitedCookie.meVisited;
    },
    set meVisited(val) {
      sjVisitedCookie.meVisited = val;
      
      nuxt.$cookies.set(COOKIE_NAME, sjVisitedCookie);
    },
    get workVisited() {
      return sjVisitedCookie.workVisited;
    },
    set workVisited(val) {
      sjVisitedCookie.workVisited = val;
      
      nuxt.$cookies.set(COOKIE_NAME, sjVisitedCookie);
    },
  };
}

export default function () {
  nuxt = useNuxtApp();

  const visitedCookie = nuxt.$cookies.get(COOKIE_NAME);
  
  if (visitedCookie)
    return _makeGetterSetter(visitedCookie);

  nuxt.$cookies.set(COOKIE_NAME, {
    meVisited: false,
    workVisited: false,
  }, {
    path: '/',
  });

  return nuxt.$cookies.get(COOKIE_NAME);
}

