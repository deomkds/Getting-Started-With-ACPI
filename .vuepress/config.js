const {
    description
} = require('../package')

module.exports = {
    title: 'Primeiros Passos com a ACPI',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/Getting-Started-With-ACPI/',

	watch: {
	    $page(newPage, oldPage) {
	      if (newPage.key !== oldPage.key) {
	        requestAnimationFrame(() => {
	          if (this.$route.hash) {
	            const element = document.getElementById(this.$route.hash.slice(1));

	            if (element && element.scrollIntoView) {
	              element.scrollIntoView();
	            }
	          }
	        });
	      }
	    }
	  },
	
	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	},

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/deomkds/Getting-Started-With-ACPI',
        editLinks: true,
        editLinkText: 'Ajude-nos a melhorar esta página!',
        logo: 'homepage.png',
        nav: [{
            text: 'Outros Guias',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Site Original (em inglês)',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Guia de Instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'Pós-instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Multiboot com o OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Multiboot/'
            },            
            {
                text: 'Guia de Compra de GPUs',
                link: 'https://deomkds.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Guia de Compra de Wi-Fi',
                link: 'https://deomkds.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Guia de Compra Anti-Hackintosh',
                link: 'https://deomkds.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introdução',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['', 'Primeiros Passos com a ACPI'],
				['ssdt-platform', 'Escolhendo as SSDTs'],
            ]

        },
        {
            title: 'Métodos',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/ssdt-methods/ssdt-methods',
		        {
		            title: 'Métodos',
		            collapsable: false,
		            sidebarDepth: 2,
		            children: [
		                '/ssdt-methods/ssdt-prebuilt',
						'/ssdt-methods/ssdt-easy',
						'/ssdt-methods/ssdt-long',
		            ]
		        },
            ]
        },
        {
            title: 'Manual',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/Manual/dump',
                '/Manual/compile',
            ]
        },
        {
            title: 'Desktop',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/Desktops/desktop-disable', 'Desativando GPUs Dedicadas'],
            ]
        },
        {
            title: 'Notebook',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                ['/Laptops/backlight', 'Consertando a Luz de Fundo'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
		                ['/Laptops/backlight-methods/prebuilt', 'Pronto'],
		                ['/Laptops/backlight-methods/manual', 'Manual'],
		            ]
		        },
                ['/Laptops/trackpad', 'Consertando o Trackpad'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
		                ['/Laptops/trackpad-methods/prebuilt', 'Pronto'],
		                ['/Laptops/trackpad-methods/manual', 'Manual'],
		            ]
		        },
				['/Laptops/laptop-disable', 'Desativando GPUs Dedicadas'],
            ]
        },
        {
            title: 'Universal',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                ['/Universal/ec-fix', 'Embedded Controller'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
		                ['/Universal/ec-methods/prebuilt', 'Pronto'],
						['/Universal/ec-methods/ssdttime', 'SSDTTime'],
		                ['/Universal/ec-methods/manual', 'Manual'],
		            ]
		        },
                ['/Universal/plug', 'Gerenciamento de Energia da CPU'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
		                ['/Universal/plug-methods/prebuilt', 'Pronto'],
						['/Universal/plug-methods/ssdttime', 'SSDTTime'],
		                ['/Universal/plug-methods/manual', 'Manual'],
		            ]
		        },
                ['/Universal/awac', 'AWAC vs RTC'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
		                ['/Universal/awac-methods/prebuilt', 'Pronto'],
		                ['/Universal/awac-methods/ssdttime', 'SSDTTime'],
		                ['/Universal/awac-methods/manual', 'Manual'],
						['/Universal/awac-methods/manual-hedt', 'HEDT Manual'],
		            ]
		        },
                ['/Universal/nvram', 'NVRAM PMC'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
		                ['/Universal/nvram-methods/prebuilt', 'Pronto'],
		                ['/Universal/nvram-methods/ssdttime', 'SSDTTime'],
		                ['/Universal/nvram-methods/manual', 'Manual'],
		            ]
		        },
                ['/Universal/rhub', 'USB RHUB'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
		                ['/Universal/rhub-methods/prebuilt', 'Pronto'],
						['/Universal/rhub-methods/ssdttime', 'SSDTTime'],
		                ['/Universal/rhub-methods/manual', 'Manual'],
		            ]
		        },
                ['/Universal/imei', 'IMEI'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
		                ['/Universal/imei-methods/prebuilt', 'Pronto'],
		                ['/Universal/imei-methods/manual', 'Manual'],
		            ]
		        },
                ['/Universal/unc0', 'Consertanto o Uncore Bridge'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
						['/Universal/unc0-methods/prebuilt', 'Pronto'],
		                ['/Universal/unc0-methods/manual', 'Manual'],
		            ]
		        },
                ['/Universal/smbus', 'Consertanto o Suporte a SMBus'],
		        {
					title: 'Métodos',
		            collapsable: true,
		            sidebarDepth: 2,
		            children: [
		                ['/Universal/smbus-methods/manual', 'Manual'],
		            ]
		        },
                ['/Universal/irq', 'Correção de IRQ'],
				['/Universal/spoof', 'Spoof de GPU'],
            ]
        },
        {
            title: 'Limpeza',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['cleanup', 'Limpeza'],
            ]
        },
        {
            title: 'Outros',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['troubleshooting', 'Solução de Problemas'],
				['CONTRIBUTING', 'Contribuindo'],
            ]
        },
    	],
    },
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
