import 'dotenv/config';

// Simple admin gate using a shared secret header
// Usage: send header `x-admin-key: <ADMIN_KEY>`
export const requireAdmin = (req, res, next) => {
  try {
    const provided = req.header('x-admin-key') || '';
    const expected = process.env.ADMIN_KEY || '';
    if (!expected) {
      return res.status(500).json({ msg: 'Server misconfigured: ADMIN_KEY not set' });
    }
    if (!provided || provided !== expected) {
      return res.status(403).json({ msg: 'Forbidden: admin access required' });
    }
    next();
  } catch (e) {
    return res.status(500).json({ msg: 'Authorization error' });
  }
};

export default requireAdmin;

