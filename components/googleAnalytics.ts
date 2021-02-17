import ReactGA from "react-ga"

export const initGA = () => {
  ReactGA.initialize("G-QPKZ1N1JJZ")
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
