import React from 'react'

function App() {
return (
<div className="min-h-screen bg-gray-100 text-gray-800">
<nav className="bg-blue-600 p-4 text-white shadow-md">
<div className="container mx-auto flex justify-between items-center">
<h1 className="text-xl font-bold">Praktikum Tailwind</h1>
<ul className="flex space-x-4">
<li><a href="#" className="hover:text-blue-200 transition">Beranda</a></li>
<li><a href="#" className="hover:text-blue-200 transition">Profil</a></li>
</ul>
</div>
</nav>

  <main className="container mx-auto mt-8 p-4">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Data Mahasiswa</h2>
      <div className="mb-4">
        <p className="text-gray-600 text-sm">Nama Lengkap</p>
        <p className="font-semibold text-lg">Farizqahasan Luqman Hakim</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600 text-sm">NIM</p>
        <p className="font-semibold text-lg">253140707111099</p>
      </div>
      <div className="mb-6">
        <p className="text-gray-600 text-sm">Program Studi</p>
        <p className="font-semibold text-lg">D3 Teknologi Informasi</p>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Edit Profil
      </button>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Hubungi Saya</h3>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pesan">
            Tinggalkan Pesan
          </label>
          <textarea 
            id="pesan" 
            rows="3" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Ketik pesan di sini..."
          ></textarea>
        </div>
        <button 
          type="button" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  </main>
</div>
)
}

export default App