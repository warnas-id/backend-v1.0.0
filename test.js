bookEventHandler = () => {
  if (!this.context.token) {
    this.setState({
      selectedEvent: null
    });
    return;
  }
  console.log(this.state.selectedEvent)
  const requestBody = {
    query: `
        mutation BookEvent($id: ID!) {
          bookEvent(eventId: $id) {
            _id
           createdAt
           updatedAt
          }
        }
      `,
    variables: {
      id: this.state.selectedEvent._id
    }
  };

  fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.context.token
      }
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
      }
      return res.json();
    })
    .then(resData => {
      console.log(resData);
      this.setState({
        selectedEvent: null
      });
    })
    .catch(err => {
      console.log(err);
    });
};