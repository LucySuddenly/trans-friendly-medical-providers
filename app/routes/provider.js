import Route from '@ember/routing/route';
import fetch from 'fetch'

export default Route.extend({
    model(params){
        return fetch("http://localhost:3000/providers/" + params.id)
        .then(resp => resp.json())
    }
});
