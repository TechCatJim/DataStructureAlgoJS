function WeightedGraph() {
  Graph.call(this);
}

WeightedGraph.prototype = Object.create(Graph.prototype);

WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
  this.adjacencyList[vertex1].push({ node: vertex2, weight });
  this.adjacencyList[vertex2].push({ node: vertex1, weight });
};

WeightedGraph.prototype.Dijkstra = function (start, finish) {
  var previous = {};
  var distances = {};
  var path = [];
  var smallest;
  var nodes = new PriorityQueue();

  for (let vertex in this.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      nodes.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      nodes.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  while (nodes.values.length) {
    smallest = nodes.dequeue().val;
    if (smallest === finish) {
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    } else {
      for (let neighbor in this.adjacencyList[smallest]) {
        let nextNode = this.adjacencyList[smallest][neighbor];
        let candidate = distances[smallest] + nextNode.weight;
        let nextNeighbor = nextNode.node;
        if (candidate < distances[nextNeighbor]) {
          distances[nextNeighbor] = candidate;
          previous[nextNeighbor] = smallest;
          nodes.enqueue(nextNeighbor, candidate);
        }
      }
    }
  }
  return path.concat(smallest).reverse();
};

/***
 *** Use Graph as a constructor for WeightedGraph to inherit from!
 ***
 ***/

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
  let total = 0;

  Object.values(this.adjacencyList).forEach((list) => {
    total += list.length;
  });

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
  return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function (vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    (v) => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    (v) => v !== vertex1
  );
};

/***
 *** Use the following as a PriorityQueue (it's a min heap)!
 ***/

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var g = new WeightedGraph();

g.addVertex("A");
g.addVertex("Z");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("H");
g.addVertex("Q");
g.addVertex("G");

g.addEdge("A", "Z", 7);
g.addEdge("A", "C", 8);

g.addEdge("Z", "Q", 2);

g.addEdge("C", "G", 4);

g.addEdge("D", "Q", 8);

g.addEdge("E", "H", 1);

g.addEdge("H", "Q", 3);

g.addEdge("Q", "C", 6);

g.addEdge("G", "Q", 9);

g.Dijkstra("A", "E"); // ["A", "Z", "Q", "H", "E"]
g.Dijkstra("A", "Q"); // ["A", "Z", "Q"]
g.Dijkstra("A", "G"); // ["A", "C", "G"]
g.Dijkstra("A", "D"); // ["A", "Z", "Q", "D"]
