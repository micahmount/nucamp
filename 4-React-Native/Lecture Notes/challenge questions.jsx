import {KeyboardAvoidingView} from 'react-native';

... 



// https://facebook.github.io/react-native/docs/keyboardavoidingview
<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
  <Modal
    animationType={"slide"}
    transparent={false}
    visible={this.state.showModal}
    onDismiss={() => this.toggleModal()}
    onRequestClose={() => this.toggleModal()}>
    <View style={styles.modal}>
      <Rating
        fractions={0}
        startingValue={this.state.rating}
        showRating
        onFinishRating={(rating) => this.setState({ rating: rating })}
        style={{ paddingVertical: 10 }}
      />

      <Input
        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
        placeholder=' Author'
        onChangeText={(author) => this.setState({ author: author })}
      />
      <Input
        leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
        placeholder=' Comment'
        onChangeText={(comment) => this.setState({ comment: comment })}
      />
      <View style={styles.modal}>
        <Button
          onPress={() => { this.handleComment(dishId); this.resetForm(); }}
          title="Submit"
          color="#512DA8"

        />
      </View>
      <View style={{ marginTop: 0, marginLeft: 20, marginRight: 20 }}>
        <Button
          onPress={() => { this.toggleModal(); this.resetForm(); }}
          color="#808080"
          title="Cancel"
        />
      </View>
    </View>

  </Modal>
</KeyboardAvoidingView>;