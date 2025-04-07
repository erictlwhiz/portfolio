import numpy as np

def create_matrix(size):
    """
    Creates an empty QR code matrix with the given size.

    :param size: Size of the QR code matrix (e.g., 21x21 for version 1).
    :return: Numpy array representing the QR code matrix.
    """
    return np.zeros((size, size), dtype=int)

def add_finder_patterns(matrix):
    """
    Adds finder patterns to the QR code matrix.

    :param matrix: The QR code matrix.
    """
    # Top-left corner
    matrix[0:7, 0:7] = 1
    # Top-right corner
    matrix[0:7, -7:] = 1
    # Bottom-left corner
    matrix[-7:, 0:7] = 1

if __name__ == "__main__":
    size = 21  # Version 1 QR code
    matrix = create_matrix(size)
    add_finder_patterns(matrix)
    print(matrix)
