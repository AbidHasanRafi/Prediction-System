# Prediction System

This repository is a part of a research project that contains components for a Prediction System.

- **model-ui**: A React-based front-end that serves as the user interface for the system.
- **server-api**: A Flask-based back-end that handles the API requests and processes the predictions using a trained machine learning model.

---

## Getting Started

To set up the project locally, follow the instructions below for both the front-end (`model-ui`) and back-end (`server-api`) folders.

### Clone the Repository

First, clone the repository using the following command:

```bash
git clone https://github.com/AbidHasanRafi/Prediction-System.git
```

Navigate to the project directory:

```bash
cd Prediction-System
```

---

## Front-End Setup (model-ui)

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation & Setup

1. Navigate to the `model-ui` directory:

   ```bash
   cd model-ui
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The React application should now be accessible at [http://localhost:5173](http://localhost:5173/).

---

## Back-End Setup (server-api)

### Prerequisites

Make sure you have the following installed:

- [Python](https://www.python.org/downloads/) (v3.7 or later)
- [pip](https://pip.pypa.io/en/stable/) (Python package installer)

### Installation & Setup

1. Navigate to the `server-api` directory:

   ```bash
   cd ../server-api
   ```

2. Create a virtual environment (recommended for dependency management):

   ```bash
   python -m venv venv
   ```

   Activate the virtual environment:

   - **Windows**:

     ```bash
     venv\Scripts\activate.bat
     ```

   - **macOS/Linux**:

     ```bash
     source venv/bin/activate
     ```

3. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask server:

   ```bash
   python app.py
   ```

   The Flask API will be running at [http://localhost:5000](http://localhost:5000).

---

## About the Prediction Model

The server leverages a machine learning model trained on a modified version of the **PlantVillage** dataset. This dataset contains approximately 87,000 RGB images of both healthy and diseased plant leaves across 38 distinct plant disease categories.

The model is designed to predict the presence of diseases within the confines of this dataset. Any predictions outside of these 38 categories may not be accurate.

---

## Usage

Once both the front-end and back-end are running, you can interact with the system by following these steps:

1.  Open the React app at [http://localhost:5173](http://localhost:5173).
    ![](/assests/sample_01.png)

2.  Upload an image of a leaf using the file input under the Upload a Leaf Image section. Only one image should be uploaded at a time to avoid errors. After selecting the image, a preview will appear.
    ![](/assests/sample_02.png)

3.  Click the Predict button to generate the prediction.
    ![](/assests/sample_03.png)

> **Note**: Ensure that the Flask server is running locally to process predictions correctly.

4.  During each prediction, you will observe logs in the server console indicating the POST request.
    ![](/assests/sample_04.png)

## Important Notes

- **Local Environment**: Both the front-end (React) and back-end (Flask) should be running simultaneously for the system to function properly.
- **Prediction Classes**: The prediction is limited to the 38 plant disease categories available in the dataset. Ensure your input image fits within the dataset's scope for best results.
