export function formatDate(date: Date, timezone: string): string {
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        timeZone: timezone
    });
    return formatter.format(date)
}

 // Other date utilities...