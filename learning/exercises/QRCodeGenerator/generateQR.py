import qrcode

def generate_qr_code(data, output_file="qrcode.png"):
    """
    Generates a QR code from the provided data and saves it as an image file.

    :param data: The data to encode in the QR code.
    :param output_file: The name of the output image file.
    """
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(output_file)

if __name__ == "__main__":
    # Example usage
    data = "https://www.etlwhiz.top"
    output_file = "etlwhiz.png"
    generate_qr_code(data, output_file)
    print(f"QR code generated and saved as {output_file}")