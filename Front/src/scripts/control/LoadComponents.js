export async function loadComponent(selector, url, callback) {
    try {
        const res = await fetch(url);
        const html = await res.text();
        document.querySelector(selector).innerHTML = html;
        if (callback) callback();
    } catch (error) {
        console.error(`Erro ao carregar ${url}:`, error);
    }
}