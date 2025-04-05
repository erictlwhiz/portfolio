import React from 'react';
import './styles/LearnAlgorithm.css'; // Import file CSS untuk styling

const LearnAlgorithm = () => {
	return (
		<div className="algorithm-page">
			{/* Component Sidebar Menu */}
			<div className="component-sidebar">
				<ul className="component-sidebar-menu">
					<li>
						<a href="#sorting-algorithms" className="component-sidebar-link">
							Sorting Algorithms
						</a>
					</li>
					<li>
						<a href="#search-algorithms" className="component-sidebar-link">
							Search Algorithms
						</a>
					</li>
					<li>
						<a href="#graph-algorithms" className="component-sidebar-link">
							Graph Algorithms
						</a>
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className="algorithm-container">
				<h1 className="algorithm-title">Algorithm Documentation</h1>
				<p className="algorithm-description">
					Welcome to the algorithm documentation page. Here, you will find
					detailed information about various algorithms, their implementations,
					and use cases.
				</p>

				<div className="algorithm-section" id="sorting-algorithms">
					<h2 className="algorithm-subtitle">Sorting Algorithms</h2>
					<p>
						Sorting algorithms are used to arrange data in a particular order.
						Examples include:
					</p>
					<ul className="algorithm-list">
						<li>Bubble Sort</li>
						<li>Merge Sort</li>
						<li>Quick Sort</li>
						<li>Heap Sort</li>
					</ul>
				</div>

				<div className="algorithm-section" id="search-algorithms">
					<h2 className="algorithm-subtitle">Search Algorithms</h2>
					<p>
						Search algorithms are used to find specific data within a dataset.
						Examples include:
					</p>
					<ul className="algorithm-list">
						<li>Binary Search</li>
						<li>Linear Search</li>
						<li>Depth-First Search (DFS)</li>
						<li>Breadth-First Search (BFS)</li>
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
