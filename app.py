from flask import Flask, request, jsonify, render_template
import csv

app = Flask(__name__)


def find_address(postcode):
    with open("utf_all.csv", encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            if row[2] == postcode:
                return f"{row[6]} {row[7]} {row[8]}"
    return "Address not found"


@app.route("/search", methods=["GET"])
def search():
    postcode = request.args.get("postcode", "")
    address = find_address(postcode)
    return jsonify({"address": address})


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
