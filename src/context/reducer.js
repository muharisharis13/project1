

export const reducer = (state, action) => {
  switch (action.type) {
    case "SCROLL":
      return {
        ...state,
        scroll: action.scroll
      }

  }
}