export default (io) => {

    io.on('connection', () => {
        console.log('New user connected');
    })

}