import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    // pegar os produtos do banco de dados
    // organizar as informações desses produtos
    // envia para o template engine
    let user = {
        name: 'cleito',
        age: 24
    }
    let showOld: boolean = false;

    if(user.age > 20){
        showOld = true;
    }

    res.render('home', {
        user,
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto Z', price: 30}
        ],
        frasesDoDia: [
            'Bom dia',
            'O importante é o caminho',
            'Boa noite'
        ]
    });
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulário para Contato.');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Página institucional sobre a empresa.');
});

router.get('/noticias', (req: Request, res: Response)=>{
    res.send('Lista de notícias.');
});

export default router;