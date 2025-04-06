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
							href="#introduction"
							className="algorithm-component-sidebar-link"
						>
							Introduction
						</a>
					</li>
					<li>
						<a
							href="#big-o-notation"
							className="algorithm-component-sidebar-link"
						>
							Big O Notation
						</a>
					</li>
					<li>
						<a
							href="#greedy-algorithms"
							className="algorithm-component-sidebar-link"
						>
							Greedy Algorithms
						</a>
					</li>
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
					You can find a detailed explanation in the book "Grokking Algorithms"
					by Aditya Y. Bhargava.
				</p>

				<div className="algorithm-section" id="introduction">
					<h2 className="algorithm-subtitle">Introduction</h2>
					<p>
						An algorithm is a set of instructions designed to solve a problem or
						task.
						<br />
						It is essential to <Highlight>
							understand the trade-offs
						</Highlight>{' '}
						between algorithms to{' '}
						<Highlight>determine the most suitable one</Highlight> for a
						specific use case.
					</p>
				</div>

				<div className="algorithm-section" id="big-o-notation">
					<h2 className="algorithm-subtitle">Big O Notation</h2>
					<p>
						Big O notation is a{' '}
						<Highlight>way to describe the efficiency</Highlight> of an
						algorithm. It measures how the number of operations grows, rather
						than the actual time taken. Big O notation typically focuses on the
						worst-case scenario.
						<br />
						<br />
						For example, the <a href="#simpleSearch">simple search</a> algorithm
						requires 100 steps to process 100 items, which is called linear
						time. In contrast, <a href="#binarySearch">binary search</a> only
						needs 7 steps for the same dataset, which is logarithmic time.
						<br />
						<br />
						Note: Besides the worst-case runtime, it is also important to
						consider the average-case runtime.
					</p>
					<h3>Common Big O Run Times</h3>
					<p>
						The six most common Big O run times, ranked from fastest to slowest,
						are:{' '}
					</p>
					<ul className="algorithm-list">
						<li>O(1) - Constant Time</li>
						<li>O(log n) - Logarithmic Time</li>
						<li>O(n) - Linear Time</li>
						<li>O(n log n) - Linearithmic Time</li>
						<li>O(n²) - Quadratic Time</li>
						<li>O(n!) - Factorial Time</li>
					</ul>
					<h3>
						<Highlight>
							Algorithm running times grow at different rates
						</Highlight>
					</h3>
					<p>
						When searching through 100 items, the difference between linear time
						and logarithmic time is about 15 times. However, for 1 billion
						items, the difference becomes enormous—linear time requires 1
						billion steps, while binary search only needs about 30 steps.
					</p>
				</div>

				<div className="algorithm-section" id="greedy-algorithms">
					<h2 className="algorithm-subtitle">Greedy Algorithms</h2>
					<p>
						Greedy algorithms solve optimization problems by making a series of
						choices that seem best at the moment. While they are not always
						optimal, they can be efficient for certain problems.
					</p>
					<h3>Traveling Salesman Problem</h3>
					<p>
						This is a well-known problem in computer science due to its rapidly
						increasing runtime as the problem size grows. It is unsolvable in
						its entirety, so the best approach is to find an approximate
						solution.
						<br />
						<br />
						For example, in the Traveling Salesman Problem, we have 5 cities and
						need to find the shortest route to visit all of them. A greedy
						algorithm can be used, but as the number of cities increases, the
						runtime worsens. For 10 cities, we must evaluate 10! (10 factorial)
						possible routes, which is an example of factorial time complexity.
					</p>
				</div>

				<div className="algorithm-section" id="search-algorithms">
					<h2 className="algorithm-subtitle">Search Algorithms</h2>
					<p>
						Search algorithms are used to locate specific data within a dataset.
						Examples include finding a person's name in a phone book or
						searching for a number in a range.
					</p>
					<ul className="algorithm-list">
						<li id="simpleSearch">Simple Search</li>
						<p>
							Simple search, also referred to as "stupid search," works by{' '}
							<Highlight>checking items one by one</Highlight> from start to
							finish. In the worst-case scenario, it requires n steps to find a
							solution.
						</p>
						<li id="binarySearch">Binary Search</li>
						<p>
							Binary search requires a sorted dataset. It works by{' '}
							<Highlight>eliminating half of the possibilities</Highlight> at
							each step. In the worst-case scenario, it requires log₂(n) steps
							to find a solution.
						</p>
						<p>Note: Logarithms are the inverse of exponentiation.</p>
						<li>Linear Search</li>
						<li>Depth-First Search (DFS)</li>
						<li>Breadth-First Search (BFS)</li>
					</ul>
				</div>

				<div className="algorithm-section" id="sorting-algorithms">
					<h2 className="algorithm-subtitle">Sorting Algorithms</h2>
					<p>
						Sorting algorithms arrange data in a specific order. Examples
						include:
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
						Graph algorithms solve problems related to graphs. Examples include:
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
