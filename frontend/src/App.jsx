import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [view, setView] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    category: 'Books',
    imageUrl: '',
    sellerContact: ''
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/items');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        alert('Item listed successfully!');
        setForm({ title: '', description: '', price: '', category: 'Books', imageUrl: '', sellerContact: '' });
        setView('home');
        fetchItems();
      }
    } catch (err) {
      console.error('Error posting item:', err);
    }
  };

  const filteredItems = categoryFilter === 'All' 
    ? items 
    : items.filter(item => item.category === categoryFilter);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '1000px', margin: '0 auto', padding: '20px', color: '#222' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #eee', paddingBottom: '15px', marginBottom: '25px' }}>
        <h2 style={{ margin: 0 }}>🎓 Campus Thrift</h2>
        <div>
          <button 
            onClick={() => setView('home')} 
            style={{ marginRight: '10px', padding: '8px 16px', cursor: 'pointer', background: view === 'home' ? '#222' : '#f4f4f4', color: view === 'home' ? '#fff' : '#222', border: 'none', borderRadius: '6px' }}
          >
            Marketplace
          </button>
          <button 
            onClick={() => setView('sell')} 
            style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            + Sell Item
          </button>
        </div>
      </header>

      {view === 'home' ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <h3 style={{ margin: 0 }}>Available Items ({filteredItems.length})</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['All', 'Books', 'Electronics', 'Hostel', 'Other'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    border: '1px solid #ddd',
                    background: categoryFilter === cat ? '#007bff' : '#fff',
                    color: categoryFilter === cat ? '#fff' : '#333',
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#777', marginTop: '40px' }}>No items found in this category. Click "+ Sell Item" to add one!</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '20px' }}>
              {filteredItems.map(item => (
                <div key={item._id} style={{ border: '1px solid #e0e0e0', borderRadius: '10px', padding: '15px', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                  <img 
                    src={item.imageUrl || 'https://via.placeholder.com/200x140?text=No+Image'} 
                    alt={item.title} 
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px' }} 
                  />
                  <span style={{ fontSize: '11px', background: '#eef', color: '#0056b3', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                    {item.category}
                  </span>
                  <h4 style={{ margin: '8px 0 4px', fontSize: '16px' }}>{item.title}</h4>
                  <p style={{ color: '#28a745', fontWeight: 'bold', fontSize: '18px', margin: '4px 0' }}>₹{item.price}</p>
                  <p style={{ fontSize: '13px', color: '#555', margin: '8px 0', minHeight: '36px' }}>{item.description}</p>
                  <div style={{ fontSize: '12px', background: '#f8f9fa', padding: '8px', borderRadius: '6px', border: '1px solid #eee' }}>
                    📞 <strong>Contact:</strong> {item.sellerContact}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div style={{ maxWidth: '480px', margin: '0 auto', background: '#f9f9f9', padding: '25px', borderRadius: '10px', border: '1px solid #eee' }}>
          <h3 style={{ marginTop: 0 }}>List an Item for Sale</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input type="text" placeholder="Item Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
            <input type="number" placeholder="Price in ₹" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
            <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}>
              <option value="Books">Books</option>
              <option value="Electronics">Electronics</option>
              <option value="Hostel">Hostel Gear</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" placeholder="Image URL" value={form.imageUrl} onChange={e => setForm({...form, imageUrl: e.target.value})} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
            <input type="text" placeholder="Seller Contact (Room / Phone)" value={form.sellerContact} onChange={e => setForm({...form, sellerContact: e.target.value})} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
            <textarea placeholder="Condition & details..." value={form.description} onChange={e => setForm({...form, description: e.target.value})} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', height: '80px' }} />
            <button type="submit" style={{ padding: '12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}>
              Post Item
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;