export const types = {
  EVENTS: {
    SYNC: 'EVENTS.SYNC',
  },
  PAGES: {
    SYNC: 'PAGES.SYNC',
    ADD: 'PAGES.ADD',
    REMOVE: 'PAGES.REMOVE',
  },
}

export function syncEvents (events) {
  return {
    type: types.EVENTS.SYNC,
    events,
  }
}

export function syncPages (pages) {
  return {
    type: types.PAGES.SYNC,
    pages,
  }
}

export function addPage () {
  return {
    type: types.PAGES.ADD,
  }
}

export function removePage (pageId) {
  return {
    type: types.PAGES.REMOVE,
    pageId,
  }
}



