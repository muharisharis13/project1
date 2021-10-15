

export const reducer = (state, action) => {
  switch (action.type) {
    case "SCROLL":
      return {
        ...state,
        scroll: action.scroll
      }
    case "LOADING":
      return {
        ...state,
        loading: action.loading
      }

  }
}