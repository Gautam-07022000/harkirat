import json
import random
import string

# Function to generate random decimal values between min_val and max_val
def generate_decimal(min_val, max_val):
    return round(random.uniform(min_val, max_val), 1)

# Generate the array of JSON objects
data = []
series_options = ["High Performers", "Meets Expectations", "Needs Improvement"]

for i in range(20):
    json_obj = {
        "id": i,
        "series": series_options[i % 3],
        "x": generate_decimal(3, 3.5),
        "emp_Name" : ''.join(random.choices(string.ascii_letters + string.digits, k=5)),
        "y": random.randint(60, 110),
        "z": 8  # Adjust range if needed
    }
    data.append(json_obj)

# Save the JSON data to a file
with open("data.json", "w") as file:
    json.dump(data, file, indent=4)

print("JSON data has been generated and saved to 'data.json'.")
