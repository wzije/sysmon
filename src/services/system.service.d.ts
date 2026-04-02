export declare const getSystemData: () => Promise<{
    system: {
        hostname: string;
        platform: string;
        distro: string;
        kernel: string;
        arch: NodeJS.Architecture;
    };
    cpu: {
        usage: string;
        cores: number;
    };
    memory: {
        usage: string;
        total: string;
        used: string;
    };
    disk: {
        fs: string;
        size: string;
        used: string;
        free: string;
        usage: string;
    }[];
    network: {
        iface: string;
        ip: string;
        mac: string;
    }[];
    uptime: string;
    processes: {
        all: number;
        running: number;
    };
}>;
//# sourceMappingURL=system.service.d.ts.map