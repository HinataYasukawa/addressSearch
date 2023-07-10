from flask import Flask, request, render_template
import csv

app = Flask(__name__)


def search_address(zip_code):
    with open("utf_all.csv", encoding="utf-8", mode="r") as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            if row[2] == zip_code:
                return f"{row[6]} {row[7]} {row[8]}"
    return "No address found for this postal code."


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/search", methods=["POST"])
def search():
    zip_code = request.form.get("zipcode")
    address = search_address(zip_code.replace("-", ""))
    return address


if __name__ == "__main__":
    app.run(debug=True)
