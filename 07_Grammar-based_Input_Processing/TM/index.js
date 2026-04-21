/**
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt}
 */
function parseRobots(text) {
    const result = {
        agents: {},
        Sitemap: [],
    };

    let currentAgents = [];

    const lines = text.split(/\r?\n/);

    for (const rawLine of lines) {
        const line = rawLine.split('#')[0].trim();
        if (!line) continue;

        const idx = line.indexOf(':');
        if (idx === -1) continue;

        const key = line.slice(0, idx).trim().toLowerCase();
        const value = line.slice(idx + 1).trim();

        if (key === 'user-agent') {
            const agentName = value.toLowerCase();

            if (!result.agents[agentName]) {
                result.agents[agentName] = {
                    Allow: [],
                    Disallow: [],
                };
            }

            currentAgents = [agentName];
        } else if (key === 'allow') {
            if (value === '') continue;
            for (const agent of currentAgents) {
                result.agents[agent].Allow.push(value);
            }
        } else if (key === 'disallow') {
            if (value === '') continue;
            for (const agent of currentAgents) {
                result.agents[agent].Disallow.push(value);
            }
        } else if (key === 'sitemap') {
            if (value === '') continue;
            result.Sitemap.push(value);
        }
    }

    return result;
}

module.exports = parseRobots;