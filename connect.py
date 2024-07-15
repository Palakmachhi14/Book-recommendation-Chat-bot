from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message')
    
    # Your model inference logic here
    response_message = your_model_response_function(user_message)
    
    return jsonify({'response': response_message})

def your_model_response_function(message):
    # Replace with actual model inference code
    return f"Echo: {message}"

if __name__ == '__main__':
    app.run(debug = True)
