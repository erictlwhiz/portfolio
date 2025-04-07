import matplotlib.pyplot as plt

def render_qr(matrix):
    """
    Renders the QR code matrix as an image.

    :param matrix: The QR code matrix.
    """
    plt.imshow(matrix, cmap="binary")
    plt.axis("off")
    plt.show()

if __name__ == "__main__":
    size = 21
    matrix = create_matrix(size)
    add_finder_patterns(matrix)
    data_bits = "0100001100100000010011000100110001001111"  # Example binary data
    place_data(matrix, data_bits)
    render_qr(matrix)
