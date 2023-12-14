# Django-Chat-Application


This is a simple chat application built using Django where users can join different rooms and communicate with others in real-time.

## Installation

1. Clone the repository: git clone https://github.com/ahammed03/Django-Chat-Application.git
cd Django-Chat-Application

2. Create a virtual environment and activate it:
python -m venv env
source env/bin/activate # For Linux/Mac
.\env\Scripts\activate # For Windows

3. Install the required dependencies:
pip install -r requirements.txt

4. Apply migrations:
python manage.py migrate

5. Start the development server:
python manage.py runserver

6. Access the application at `http://localhost:8000`

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Chat Rooms: Users can create rooms, join existing rooms, and chat with other users in the same room.
- Real-time Communication: Utilizes WebSockets for real-time communication within the rooms.
- Responsive Design: User-friendly interface adaptable to different devices.

## Technologies Used

- Django
- Django Channels
- HTML/CSS/JavaScript

## File Structure

The project structure is organized as follows:
- `Django-Chat-Application/ChatApplication/`: Main Django application directory.
- `Django-Chat-Application/ChatApplication/room/`: Contains the rooms app for handling rooms and chat functionality.
- `Django-Chat-Application/ChatApplication/home/`: Manages user authentication and profile functionalities.
- `Django-Chat-Application/ChatApplication/home/templates/`: HTML templates.
- `Django-Chat-Application/ChatApplication/home/static/`: Static files including CSS, JavaScript, and images.

## Usage

1. Register a new account or log in with existing credentials.
2. Explore existing chat rooms or create your own.
3. Join a room to start chatting with other users in real-time.

## Contributors

- [ahammed03](https://github.com/ahammed03/)

Feel free to contribute, report issues, or suggest improvements by opening an issue or pull request.

Happy chatting! 🎉
