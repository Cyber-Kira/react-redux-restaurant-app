export default class RestoService {
    async getMenuItems() {
        const url = 'http://localhost:3000/menu'
        
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
}