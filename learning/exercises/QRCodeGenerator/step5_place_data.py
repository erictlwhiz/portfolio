def place_data(matrix, data_bits):
    """
    Places data bits into the QR code matrix.

    :param matrix: The QR code matrix.
    :param data_bits: Binary string of data bits.
    """
    size = matrix.shape[0]
    row, col = size - 1, size - 1
    direction = -1  # Start moving upwards

    for bit in data_bits:
        while matrix[row, col] != 0:  # Skip reserved areas
            col -= 1
            if col < 0:
                col = size - 1
                row += direction
                if row < 0 or row >= size:
                    direction *= -1
                    row += direction

        matrix[row, col] = int(bit)

if __name__ == "__main__":
    size = 21
    matrix = create_matrix(size)
    add_finder_patterns(matrix)
    data_bits = "0100001100100000010011000100110001001111"  # Example binary data
    place_data(matrix, data_bits)
    print(matrix)
