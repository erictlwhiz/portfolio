from reedsolo import RSCodec

def add_error_correction(data_bits, total_codewords=26, error_codewords=7):
    """
    Adds error correction to the data using Reed-Solomon codes.

    :param data_bits: Binary string of data bits.
    :param total_codewords: Total number of codewords (data + error correction).
    :param error_codewords: Number of error correction codewords.
    :return: Binary string with error correction.
    """
    # Convert binary data to bytes
    data_bytes = int(data_bits, 2).to_bytes((len(data_bits) + 7) // 8, byteorder='big')

    # Generate Reed-Solomon error correction codes
    rs = RSCodec(error_codewords)
    full_data = rs.encode(data_bytes)

    # Convert back to binary
    full_data_bits = ''.join(format(byte, '08b') for byte in full_data)

    return full_data_bits

if __name__ == "__main__":
    data_bits = "0100001100100000010011000100110001001111"  # Example binary data
    full_data_bits = add_error_correction(data_bits)
    print(f"Data with Error Correction: {full_data_bits}")
