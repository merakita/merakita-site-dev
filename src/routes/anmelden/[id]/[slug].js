


export async function get({ params }) {
  // `params.slug` comes from [slug].js

    const prefix = "https://booking.seminardesk.de/de/merakita/"
    const suffix = "/embed"
    const url = prefix + params.id + "/" + params.slug + suffix

    return {
        body: { bookingURL: url }
    };


}