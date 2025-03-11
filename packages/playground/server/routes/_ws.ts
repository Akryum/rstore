export default defineWebSocketHandler({
  message(peer, message) {
    // @TODO make this work on cloudflare
    // const data = message.json<WebsocketMessage>()
    // if (data.type === 'subscribe') {
    //   peer.subscribe(data.topic)
    // }
    // else if (data.type === 'unsubscribe') {
    //   peer.unsubscribe(data.topic)
    // }
    // else if (data.type === 'publish') {
    //   peer.publish(data.topic, JSON.stringify({ item: data.payload }))
    // }
    peer.peers.forEach((p) => {
      if (p !== peer) {
        p.send(message)
      }
    })
  },
  close() {
    // noop
  },
})
