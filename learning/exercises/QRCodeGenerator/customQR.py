import numpy as np
import matplotlib.pyplot as plt

def create_simple_qr(data):
    """
    A simplified QR code generator (not standard-compliant).
    Encodes data into a binary grid and visualizes it.

    :param data: The data to encode (string).
    """
    # Convert data to binary (simplified, not standard-compliant)
    binary_data = ''.join(format(ord(char), '08b') for char in data)

    # Create a grid (size depends on data length)
    data_length = len(binary_data)
    size = int(np.ceil(np.sqrt(data_length))) + 16  # Add padding for finder patterns
    qr_matrix = np.zeros((size, size), dtype=int)

    # Add finder patterns (simplified)
    qr_matrix[0:7, 0:7] = 1
    qr_matrix[0:7, -7:] = 1
    qr_matrix[-7:, 0:7] = 1

    # Place binary data into the grid
    row, col = 8, 8
    for bit in binary_data:
        qr_matrix[row, col] = int(bit)
        col += 1
        if col >= size - 8:
            col = 8
            row += 1

    # Visualize the QR code
    plt.imshow(qr_matrix, cmap="binary")
    plt.axis("off")
    plt.show()

if __name__ == "__main__":
    data = "Hello, QR!"
    create_simple_qr(data)
