
// bi-dimensional WeakMap implementation
export default class WeakMatrix {
  #map = new WeakMap();

  /**
   * adds a new value at the specified key1,key2 location to a WeakMatrix object
   * @param {*} key1 Required. Must be object. The key1 of the element to add to the WeakMatrix object.
   * @param {*} key2 Required. Must be object. The key2 of the element to add to the WeakMatrix object.
   * @param {*} value Required. Any value. The value of the element to add to the WeakMatrix object.
   * @returns {WeakMatrix} Returns this WeakMatrix instance.
   */
  set(key1, key2, value) {
    let map2 = this.#map.get(key1);
    if (!map2) {
      map2 = new WeakMap();
      this.#map.set(key1, map2);
    }
    map2.set(key2, value);
    return this;
  }


  /**
   * returns a specified element from a WeakMatrix object.
   * @param {*} key1 Required. Must be object. The key1 of the element to return from the WeakMatrix object.
   * @param {*} key2 Required. Must be object. The key2 of the element to return from the WeakMatrix object.
   * @return {*} The element associated with the specified key1 ,key2 in the WeakMatrix object. If the key can't be found, undefined is returned.
   */
  get(key1, key2) {
    return this.#map.get(key1)?.get(key2);
  }

  /**
   * returns a boolean indicating whether an element with the specified key1, key2 exists or not.
   * @param {*} key1 Required. Must be object. The key1 of the element to test for presence in the WeakMatrix object.
   * @param {*} key2 Required. Must be object. The key2 of the element to test for presence in the WeakMatrix object.
   * @return {boolean} Returns true if an element with the specified key1, key2 exists in the WeakMatrix object; otherwise false.
   */
  has(key1, key2) {
    const map = this.#map.get(key1);
    if (!map) return false;
    return map.has(key2);
  }

  /**
   * removes the specified element from a WeakMatrix object.
   * @param {*} key1 Required. Must be object. The key1 of the element to remove from the WeakMatrix object.
   * @param {*} key2 Required. Must be object. The key2 of the element to remove from the WeakMatrix object.
   * @return {boolean} Returns true if an element with the specified key was successfully removed from the WeakMatrix object; otherwise false.
   */
  delete(key1, key2) {
    if (key2 === undefined) return this.#map.delete(key1);
    const map = this.#map.get(key1);
    if (!map) return false;
    return map.delete(key2);
  }

  /**
   * removes all elements from a WeakMatrix object.
   * @param {*} key1 Required. Must be object. The key1 of the element to remove from the WeakMatrix object.
   * @deprecated https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear
   */
  clear(key1) {
    if (key1!==undefined) this.#map.get(key1)?.clear();
    else this.#map.clear();
  }

  /**
    * removes all elements from a WeakMatrix object
    * @deprecated https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear
    */
  clearAll() {
    this.#map.clear();
  }
}

const m = new WeakMap();