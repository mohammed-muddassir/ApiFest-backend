export default function Routes(app) {
    //app.post('/api',(req,res) => {})
    app.get('/api',(req,res) => {
        res.send(200);
    });

    app.put('/api',(req,res)=> {

    });
    app.delete('/api',(req,res)=> {

    });

}