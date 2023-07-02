import { UserModal } from '@/types/models/user'
import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userStore = atom<UserModal>({
	key: 'userStore',
	default: {
		id: '',
		type: '',
		userName: '',
		token: '',
	},
	effects_UNSTABLE: [persistAtom],
})

// export const getNameOfUserStore = selector({
// 	key: 'nameStore',
// 	get: ({ get }) => {
// 		return get(userStore).first_name + get(userStore).last_name
// 	},
// })

export const getTokenOfUSerStore = selector({
	key: 'tokenStore',
	get: ({ get }) => {
		return get(userStore).token
	},
})
