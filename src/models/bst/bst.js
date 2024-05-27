import { Node } from "./node.js";

class BST {
  #root;
  historialPreOrden = []
  constructor() {
    this.#root = null;
    this.historialPreOrden = [];
  }
  add(value) {
    if (this.#root == null) this.#root = new Node(value);
    else this.insertNode(this.#root, value);
    return true;
  }
  insertNode(node, value) {
    if (value.desarrolladora < node.value.desarrolladora) {
      // cruz y hernandez
      if (node.left == null) node.left = new Node(value);
      else this.insertNode(node.left, value); //
    } else {
      if (node.right == null) node.right = new Node(value);
      else this.insertNode(node.right, value);
    }
  }

  search(desarrolladora) {
    if (this.#root != null) return this.searchNode(this.#root, desarrolladora);
  }

  searchNode(node, desarrolladora) {
    console.log(
      "nodo value: " +
        node.value.desarrolladora +
        "\n inputvalue :" +
        desarrolladora
    );
    if (desarrolladora == node.value.desarrolladora) {
      return node.value;
    }
    if (desarrolladora < node.value.desarrolladora) {
      if (node.left == null) return null;
      else this.search(node.left);
    } else {
      if (node.right == null) return null;
      else this.search(node.right);
    }
  }
  searchMinNode(){
    if (this.#root != null) return this.minNode(this.#root);
  }
  minNode(node) {
    if (node == null || node.left == null) return node.value;
    else return this.minNode(node.left);
  }

  searchMaxNode(){
    if (this.#root != null) return this.maxNode(this.#root);
  }
  maxNode(node) {
    if (node == null || node.right == null) return node.value;
    else return this.maxNode(node.right);
  }

  PreOrden(){
    this.historialPreOrden = [];
    this.recorridoPreOrden(this.#root);
    // console.log (this.historialPreOrden)
    return this.historialPreOrden
  }
  recorridoPreOrden(node){
    if (node != null){
      console.log (node.value.desarrolladora);
      this.historialPreOrden.push (node.value);
      this.recorridoPreOrden (node.left);   
      this.recorridoPreOrden (node.right);
    }
    
    return;
  }
}



export { BST };
