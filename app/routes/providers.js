import Route from '@ember/routing/route';
import fetch from 'fetch'
export default Route.extend({
    model(){
        return fetch('http://localhost:3000/providers')
        .then(resp => resp.json())
    }
});
