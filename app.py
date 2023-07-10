import csv


def search_address(zip_code):
    with open("utf_all.csv", encoding="utf-8", mode="r") as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            if row[2] == zip_code:
                return f"{row[6]} {row[7]} {row[8]}"
    return "No address found for this postal code."


def main():
    zip_code = input("Please enter a postal code: ")
    address = search_address(zip_code.replace("-", ""))
    print(address)


if __name__ == "__main__":
    main()
