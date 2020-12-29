import { LinkedList } from "../LinkedList";

export class Graph {
    vertexToEdge: IVertexToEdge;
    value: Array<LinkedList> = [];

    constructor(vertexToEdge: IVertexToEdge) {
        this.vertexToEdge = vertexToEdge;
        this.buildGraph();
    }

    buildGraph () {
        for(let vertex in this.vertexToEdge) {
            let ll = new LinkedList();
            ll.insertAtBeginning(vertex);
            for(let attachedVertex of this.vertexToEdge[vertex]) {
                ll.insertAtEnd(attachedVertex);
            }
            this.value.push(ll);
        }
    }
}

export interface IVertexToEdge {
    [vertex: string]: string[];
}