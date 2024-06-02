export default function Home() {
	return (
		<main className='flex min-h-screen flex-row items-center justify-center p-24'>
			<a
				href='/login'
				className='hover:text-gray-800 hover:bg-gray-50 text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border-2 transition-colors duration-500 ease-in-out'
			>
				Log in
			</a>
			<a
				href='/register'
				className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-colors duration-500 ease-in-out'
			>
				Get started
			</a>
		</main>
	)
}
