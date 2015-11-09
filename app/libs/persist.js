import makeFinalStore from 'alt/utils/makeFinalStore';

export default function (alt, storage, storeName) {
  const finalStore = makeFinalStore(alt);

  try {
    alt.bootstrap(storage.get(storeName));
  } catch (err) {
    console.error('Failed to bootstrap data', err);
  }

  // If `debug` is set, the data won't get saved to
  // localStorage. By doing that you can set the flag
  // `localStorage.setItem('debug', 'true')`, hit
  // `localStorage.clear()`, and refresh the browser
  // to get a clean state.
  finalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  });
}
