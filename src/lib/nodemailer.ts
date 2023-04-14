import nodemailer from 'nodemailer'

const rootUserEmail = process.env.ROOT_USER_EMAIL

export async function sendUrlAuthToRootUserEmail(urlAuth: string) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.ethereal.email',
    auth: {
      user: 'stardusteight.d4cc@gmail.com',
      pass: process.env.TWO_STEP_VERIF_PASS, // get in google Two-step verification
    },
  })

  await transporter.sendMail({
    subject: 'Access Link',
    from: '"souvientstudio" <stardusteight.d4cc@gmail.com>',
    to: rootUserEmail,
    text: `Access Link - A request for the Access Link was issued, here is your link`,
    html: `
      <div>
      <h2>Access Link</h2>
      <p>A request for the Access Link was issued, here is your link:</p>
      <a href="${urlAuth}">${urlAuth}</a>
      </div>`,
  })
}
