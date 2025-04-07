def encode_data(data):
    """
    Encodes data into binary format using byte mode.

    :param data: The input string to encode.
    :return: Binary string representing the encoded data.
    """
    # Mode indicator for byte mode (4 bits)
    mode_indicator = "0100"

    # Character count indicator (8 bits for version 1 QR codes)
    char_count = format(len(data), '08b')

    # Convert each character to its 8-bit binary representation
    data_bits = ''.join(format(ord(char), '08b') for char in data)

    # Combine all parts
    encoded_data = mode_indicator + char_count + data_bits

    # Add terminator (4 bits)
    terminator = "0000"
    encoded_data += terminator

    # Ensure the length is a multiple of 8 by adding padding bits
    while len(encoded_data) % 8 != 0:
        encoded_data += "0"

    # Add padding bytes if necessary (e.g., 11101100 and 00010001 alternately)
    while len(encoded_data) < 152:  # Version 1 QR code capacity for byte mode
        encoded_data += "11101100" if len(encoded_data) % 16 == 0 else "00010001"

    return encoded_data

if __name__ == "__main__":
    data = "Hello, QR!"
    binary_data = encode_data(data)
    print(f"Encoded Data: {binary_data}")
