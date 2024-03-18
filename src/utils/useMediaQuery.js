import { useEffect, useState } from 'react'

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(`(max-width: ${query})`).matches);
  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia(`(max-width: ${query})`)
    setMatches(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setMatches(e.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen)

    // clean up after ourselves
    return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    }
}, [])
  return matches
}

