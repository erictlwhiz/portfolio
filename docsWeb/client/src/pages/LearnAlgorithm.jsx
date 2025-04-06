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
					You can find a complete explanation in the book "Grokking Algorithms"
					by Aditya Y. Bhargava.
				</p>

				<div className="algorithm-section" id="introduction">
					<h2 className="algorithm-subtitle">Introduction</h2>
					<p>
						An algorithm is a set of instructions to solve a problem or task.
						<br />
						We need to <Highlight>understand the trade-offs</Highlight> of one
						algorithm with another to{' '}
						<Highlight>determine which algorithm is suitable</Highlight> for
						use.
					</p>
				</div>

				<div className="algorithm-section" id="big-o-notation">
					<h2 className="algorithm-subtitle">Big O Notation</h2>
					<p>
						Big O notation is a{' '}
						<Highlight>notation to show how fast an algorithm is.</Highlight>{' '}
						Big O notation does not show speed in time units but how fast the
						number of operations grows. Big O notation is always about the
						worst-case scenario. In general, we want to choose an efficient
						algorithm, whether it is trying to optimize the time or space.
						<br />
						<br />
						For example, the <a href="#simpleSearch">simple search</a> algorithm
						needs 100 steps to complete 100 items. This is called linear time.
						In contrast, <a href="#binarySearch">binary search</a> only needs 7
						steps to complete 100 items. This is called logarithmic time.
						<br />
						<br />
						Note: Along with worst-case run time, it's important to look at
						average-case run time.
					</p>
					<h3>Some common Big O run times</h3>
					The six most common Big O run times from fastest to slowest are:
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
						When the total data to be searched is 100 items, the difference
						between linear time and logarithmic time is about 15 times. However,
						when the data increases to 1 billion items, the difference becomes
						very large, about 33 million times, where linear time requires 1
						billion steps while binary search only requires about 30 steps.
					</p>
				</div>

				<div className="algorithm-section" id="greedy-algorithms">
					<h2 className="algorithm-subtitle">Greedy Algorithms</h2>
					<p>
						Greedy algorithms are used to solve optimization problems. They work
						by making a series of choices, each of which seems the best at the
						moment. Greedy algorithms are not always optimal, but they can be
						efficient for certain problems.
					</p>
					<h3>Traveling Salesman Problem</h3>
					<p>
						This is one of the most well-known problems in computer science
						because its runtime grows significantly as the problem size
						increases. It is one of the problems that cannot be fully solved.
						The best we can do is find an approximate solution.
						<br />
						<br />
						For example, in the Traveling Salesman Problem, we have 5 cities and
						want to find the shortest route to visit all of them. We can use a
						greedy algorithm to solve this problem. However, as the number of
						cities increases, the runtime of this algorithm becomes worse. For
						instance, if we have 10 cities, we need to find the shortest route
						among 10! possible routes. This is an example of factorial time
						complexity.
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
						<li id="simpleSearch">Simple Search</li>
						<p>
							Simple search, also called stupid search in this book, is a search
							algorithm that works by{' '}
							<Highlight>eliminating items one by one</Highlight> from the first
							to the last. In the worst-case scenario, simple search requires n
							steps to produce a solution.
							<br />
							For a code example in Python, you can access the following link.
						</p>
						<p></p>
						<li id="binarySearch">Binary Search</li>
						<p>
							Binary search is a search algorithm that requires a sorted list of
							items. This algorithm works by{' '}
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
