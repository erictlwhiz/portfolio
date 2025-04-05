import React from 'react';
import './styles/LearnAlgorithm.css'; // Import CSS file for styling
import Highlight from '../components/Highlight'; // Import Highlight algorithm-component

const LearnAlgorithm = () => {
	return (
		<div className="algorithm-page">
			{/* Sidebar Menu algorithm-component */}
			<div className="algorithm-component-sidebar">
				<ul className="algorithm-component-sidebar-menu">
					<li>
						<a
							href="#search-algorithms"
							className="algorithm-component-sidebar-link"
						>
							Search Algorithms
						</a>
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className="algorithm-container">
				<h1 className="algorithm-title">Algorithms</h1>
				<p className="algorithm-description">
					You can find a complete explanation in the book "Grokking Algorithms"
					by Aditya Y. Bhargava.
				</p>

				<div className="algorithm-section" id="introduction">
					<h2 className="algorithm-subtitle">Introduction</h2>
					<p>
						An algorithm is a set of instructions to solve a problem or task.
						<br />
						We need to <Highlight>understand the trade-offs</Highlight> of one
						algorithm with another to
						<Highlight>determine which algorithm is suitable</Highlight> for
						use.
					</p>
				</div>

				<div className="algorithm-section" id="search-algorithms">
					<h2 className="algorithm-subtitle">Search Algorithms</h2>
					<p>
						Search algorithms are used to find specific data within a dataset.
						Some use cases of search algorithms include finding a person's name
						in a phone book or searching for an integer among a range of
						numbers, etc.
					</p>
					<ul className="algorithm-list">
						<li>Simple Search</li>
						<p>
							Simple search, also called stupid search in this book, is a search
							algorithm that works by
							<Highlight>eliminating items one by one</Highlight> from the first
							to the last. In the worst-case scenario, simple search requires n
							steps to produce a solution.
							<br />
							For a code example in Python, you can access the following link.
						</p>
						<p></p>
						<li>Binary Search</li>
						<p>
							Binary search is a search algorithm that requires a sorted list of
							items. This algorithm works by
							<Highlight>eliminating half of the possibilities</Highlight> from
							the amount of data we are looking for. In the worst-case scenario,
							this algorithm requires log₂(n) steps to produce a solution.
							<br />
							For a code example in Python, you can access the following link.
						</p>
						<p>Note: Log is the inverse of exponentiation.</p>
						<li>Linear Search</li>
						<li>Depth-First Search (DFS)</li>
						<li>Breadth-First Search (BFS)</li>
					</ul>
				</div>

				<div className="algorithm-section" id="sorting-algorithms">
					<h2 className="algorithm-subtitle">Sorting Algorithms</h2>
					<p>
						Sorting algorithms are used to arrange data in a specific order.
						Examples include:
					</p>
					<ul className="algorithm-list">
						<li>Bubble Sort</li>
						<li>Merge Sort</li>
						<li>Quick Sort</li>
						<li>Heap Sort</li>
					</ul>
				</div>

				<div className="algorithm-section" id="graph-algorithms">
					<h2 className="algorithm-subtitle">Graph Algorithms</h2>
					<p>
						Graph algorithms are used to solve problems related to graphs.
						Examples include:
					</p>
					<ul className="algorithm-list">
						<li>Dijkstra's Algorithm</li>
						<li>Prim's Algorithm</li>
						<li>Kruskal's Algorithm</li>
						<li>Floyd-Warshall Algorithm</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LearnAlgorithm;
