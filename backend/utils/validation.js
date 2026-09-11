const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[\d\s().-]{7,20}$/;
const inquiryTypes = new Set(['demo', 'trial', 'pricing', 'support', 'partnership', 'other']);

function text(value, field, { required = true, max = 500 } = {}) {
  if (value === undefined || value === null || value === '') {
    return required ? `${field} is required.` : null;
  }
  if (typeof value !== 'string') return `${field} must be text.`;
  if (value.trim().length > max) return `${field} must be ${max} characters or fewer.`;
  return null;
}

function validateEmail(value) {
  if (!emailPattern.test(value.trim())) return 'Please provide a valid email address.';
  return null;
}

function validatePhone(value) {
  if (!phonePattern.test(value.trim())) return 'Please provide a valid phone number.';
  return null;
}

export function validateContactInput(input = {}) {
  const fields = {
    fullname: text(input.fullname, 'Full name', { max: 100 }),
    email: text(input.email, 'Email', { max: 254 }),
    company: text(input.company, 'Company', { max: 150 }),
    phonenumber: text(input.phonenumber, 'Phone number', { max: 20 }),
    inquirytype: text(input.inquirytype, 'Inquiry type', { max: 20 }),
    message: text(input.message, 'Message', { max: 3000 }),
  };
  const errors = Object.values(fields).filter(Boolean);

  if (typeof input.email === 'string' && input.email.trim() && validateEmail(input.email)) errors.push(validateEmail(input.email));
  if (typeof input.phonenumber === 'string' && input.phonenumber.trim() && validatePhone(input.phonenumber)) errors.push(validatePhone(input.phonenumber));
  if (typeof input.inquirytype === 'string' && input.inquirytype.trim() && !inquiryTypes.has(input.inquirytype.trim())) {
    errors.push('Please select a valid inquiry type.');
  }

  return { errors, value: normalize(input, ['fullname', 'email', 'company', 'phonenumber', 'fleetsize', 'inquirytype', 'message']) };
}

export function validateDemoInput(input = {}) {
  const fields = {
    company: text(input.company, 'Company', { max: 150 }),
    phonenumber: text(input.phonenumber, 'Phone number', { max: 20 }),
    email: text(input.email, 'Email', { max: 254 }),
    description: text(input.description, 'Description', { max: 3000 }),
  };
  const errors = Object.values(fields).filter(Boolean);

  if (typeof input.email === 'string' && input.email.trim() && validateEmail(input.email)) errors.push(validateEmail(input.email));
  if (typeof input.phonenumber === 'string' && input.phonenumber.trim() && validatePhone(input.phonenumber)) errors.push(validatePhone(input.phonenumber));

  return { errors, value: normalize(input, ['company', 'phonenumber', 'email', 'description']) };
}

function normalize(input, keys) {
  return Object.fromEntries(keys.map((key) => [key, typeof input[key] === 'string' ? input[key].trim() : input[key]]));
}
