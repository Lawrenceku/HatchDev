class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T>{
    let root

    levelOrderTraversal(root: TreeNode | null): void {
        if (!root) {
            return;
        }
    
        const queue: (TreeNode | null)[] = [root];
    
        while (queue.length > 0) {
            const currentNode = queue.shift();
    
            if (currentNode) {
                console.log(currentNode.value);
    
                if (currentNode.left) {
                    queue.push(currentNode.left);
                }
    
                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }
        }
    }

    preOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
          console.log(node.data);
          this.preOrderTraversal(node.left);
          this.preOrderTraversal(node.right);
        }
      }

      inOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
          this.preOrderTraversal(node!.left);
          console.log(node.data);
          this.preOrderTraversal(node!.right);
        }
      }

      
    postOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
          this.preOrderTraversal(node!.left);
          this.preOrderTraversal(node!.right);
          console.log(node.data);
        }
      }

}

const myTree = new BinaryTree<T>

myTree.root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

myTree.levelOrderTraversal(root);


/* let values:number[] = []
if (!root) return
let currNode = root ?? null
while(currNode){
if(currNode.left){
    currNode = currNode.left
    if(!currNode.left){
    values.push(currNode.right.val)
    }
}
} */